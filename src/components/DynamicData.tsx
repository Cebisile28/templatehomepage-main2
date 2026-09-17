import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  stargazers_count: number;
};

const GITHUB_USERNAME = "Cebisile28";

const GITHUB_API_URL =
  `https://api.github.com/users/${GITHUB_USERNAME}/repos` +
  "?sort=updated&direction=desc&per_page=12";

const DynamicData: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [selectedLanguage, setSelectedLanguage] =
    useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedRepo, setSelectedRepo] =
    useState<Repo | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    let timeoutId: number | undefined;

    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError("");

        timeoutId = window.setTimeout(() => {
          controller.abort();
        }, 8000);

        const response = await fetch(GITHUB_API_URL, {
          signal: controller.signal,
          headers: {
            Accept: "application/vnd.github+json",
          },
        });

        if (timeoutId !== undefined) {
          window.clearTimeout(timeoutId);
        }

        if (!response.ok) {
          throw new Error(
            `GitHub request failed with status ${response.status}.`
          );
        }

        const data: unknown = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid GitHub response.");
        }

        const validRepos: Repo[] = data
          .filter(
            (
              repo
            ): repo is Record<string, unknown> =>
              typeof repo === "object" &&
              repo !== null &&
              "id" in repo &&
              "name" in repo &&
              "html_url" in repo
          )
          .map((repo) => ({
            id: Number(repo.id),
            name: String(repo.name),
            description:
              typeof repo.description === "string"
                ? repo.description
                : null,
            language:
              typeof repo.language === "string"
                ? repo.language
                : null,
            html_url: String(repo.html_url),
            stargazers_count: Number(
              repo.stargazers_count ?? 0
            ),
          }));

        setRepos(validRepos);
      } catch (err) {
        if (controller.signal.aborted) {
          setError("Projects request timed out.");
          return;
        }

        console.error(
          "GitHub projects error:",
          err
        );

        setError(
          "Unable to load projects right now."
        );
      } finally {
        if (timeoutId !== undefined) {
          window.clearTimeout(timeoutId);
        }

        setLoading(false);
      }
    };

    void fetchRepos();

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }

      controller.abort();
    };
  }, []);

  const languages = useMemo(() => {
    const uniqueLanguages = new Set<string>();

    repos.forEach((repo) => {
      if (repo.language) {
        uniqueLanguages.add(repo.language);
      }
    });

    return [
      "All",
      ...Array.from(uniqueLanguages).sort(),
    ];
  }, [repos]);

  const filteredRepos = useMemo(() => {
    if (selectedLanguage === "All") {
      return repos;
    }

    return repos.filter(
      (repo) => repo.language === selectedLanguage
    );
  }, [repos, selectedLanguage]);

  const closeModal = () => {
    setSelectedRepo(null);
  };

  /*
   * Keep the homepage completely clean when projects
   * are loading, unavailable, or don't exist.
   *
   * No loading message.
   * No error message.
   * No empty-project message.
   * No empty filter message.
   */
  if (
    loading ||
    error ||
    repos.length === 0 ||
    filteredRepos.length === 0
  ) {
    return null;
  }

  return (
    <section
      aria-labelledby="projects-heading"
      className="
        w-full
        overflow-hidden
        bg-white
        px-4
        py-16
        transition-colors
        duration-300
        dark:bg-slate-950
        sm:px-6
        sm:py-20
        md:px-8
        lg:px-10
        lg:py-24
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
            Our Work
          </p>

          <h2
            id="projects-heading"
            className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
              dark:text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            Projects and digital work
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
            Explore selected projects and technical work from
            the Boostify ecosystem.
          </p>
        </div>

        {/* Filters */}
        {languages.length > 1 && (
          <div
            className="
              mt-8
              -mx-1
              flex
              gap-2
              overflow-x-auto
              px-1
              pb-3
              sm:mx-0
              sm:flex-wrap
              sm:justify-center
              sm:overflow-visible
            "
          >
            {languages.map((language) => {
              const active =
                selectedLanguage === language;

              return (
                <button
                  key={language}
                  type="button"
                  onClick={() =>
                    setSelectedLanguage(language)
                  }
                  aria-pressed={active}
                  className={`
                    min-h-10
                    shrink-0
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    transition-colors
                    focus:outline-none
                    focus:ring-4
                    focus:ring-amber-400/20
                    ${
                      active
                        ? "bg-amber-400 text-slate-950"
                        : "border border-slate-300 bg-white text-slate-700 hover:border-amber-400 hover:text-amber-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-amber-400 dark:hover:text-amber-400"
                    }
                  `}
                >
                  {language}
                </button>
              );
            })}
          </div>
        )}

        {/* Repository grid */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            sm:gap-6
            lg:grid-cols-3
          "
        >
          {filteredRepos.map((repo) => (
            <article
              key={repo.id}
              className="
                flex
                h-full
                min-w-0
                flex-col
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                p-5
                shadow-sm
                transition-shadow
                duration-200
                hover:shadow-lg
                dark:border-slate-800
                dark:bg-slate-900
                sm:p-6
              "
            >
              <div className="min-w-0 flex-1">

                <h3 className="break-words text-xl font-bold text-slate-900 dark:text-white">
                  {repo.name}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {repo.description ||
                    "A Boostify project with no description provided."}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-semibold">

                  <span className="rounded-full bg-amber-100 px-3 py-1.5 text-amber-700 dark:bg-amber-400/10 dark:text-amber-400">
                    {repo.language || "Other"}
                  </span>

                  <span className="text-slate-500 dark:text-slate-400">
                    ★ {repo.stargazers_count}
                  </span>

                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2">

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-950
                    px-3
                    py-2
                    text-sm
                    font-bold
                    text-white
                    transition-colors
                    hover:bg-slate-800
                    focus:outline-none
                    focus:ring-4
                    focus:ring-slate-950/20
                    dark:bg-amber-400
                    dark:text-slate-950
                    dark:hover:bg-amber-500
                  "
                >
                  View
                </a>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedRepo(repo)
                  }
                  className="
                    inline-flex
                    min-h-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    px-3
                    py-2
                    text-sm
                    font-bold
                    text-slate-700
                    transition-colors
                    hover:border-amber-400
                    hover:text-amber-600
                    focus:outline-none
                    focus:ring-4
                    focus:ring-amber-400/20
                    dark:border-slate-700
                    dark:bg-slate-950
                    dark:text-slate-300
                    dark:hover:border-amber-400
                    dark:hover:text-amber-400
                  "
                >
                  Details
                </button>

              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedRepo && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-end
            justify-center
            overflow-y-auto
            bg-slate-950/70
            p-3
            backdrop-blur-sm
            sm:items-center
            sm:p-4
          "
          role="dialog"
          aria-modal="true"
          aria-labelledby="repo-modal-title"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeModal();
            }
          }}
        >
          <div
            className="
              relative
              w-full
              max-w-lg
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-2xl
              dark:border-slate-700
              dark:bg-slate-900
              sm:p-8
            "
          >

            <button
              type="button"
              onClick={closeModal}
              aria-label="Close project details"
              className="
                absolute
                right-3
                top-3
                inline-flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-2xl
                text-slate-500
                transition-colors
                hover:bg-slate-100
                hover:text-slate-900
                focus:outline-none
                focus:ring-4
                focus:ring-amber-400/20
                dark:hover:bg-slate-800
                dark:hover:text-white
              "
            >
              ×
            </button>

            <div className="pr-10">

              <p className="text-sm font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400">
                Project
              </p>

              <h3
                id="repo-modal-title"
                className="
                  mt-2
                  break-words
                  text-2xl
                  font-bold
                  text-slate-900
                  dark:text-white
                "
              >
                {selectedRepo.name}
              </h3>

            </div>

            <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {selectedRepo.description ||
                "No project description is available."}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">

              <span className="rounded-full bg-amber-100 px-3 py-1.5 text-sm font-semibold text-amber-700 dark:bg-amber-400/10 dark:text-amber-400">
                {selectedRepo.language || "Other"}
              </span>

              <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                ★ {selectedRepo.stargazers_count} stars
              </span>

            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <a
                href={selectedRepo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  min-h-11
                  flex-1
                  items-center
                  justify-center
                  rounded-xl
                  bg-slate-950
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  transition-colors
                  hover:bg-slate-800
                  focus:outline-none
                  focus:ring-4
                  focus:ring-slate-950/20
                  dark:bg-amber-400
                  dark:text-slate-950
                  dark:hover:bg-amber-500
                "
              >
                Open on GitHub
              </a>

              <button
                type="button"
                onClick={closeModal}
                className="
                  inline-flex
                  min-h-11
                  flex-1
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-slate-300
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-slate-700
                  transition-colors
                  hover:border-slate-400
                  focus:outline-none
                  focus:ring-4
                  focus:ring-amber-400/20
                  dark:border-slate-700
                  dark:bg-slate-950
                  dark:text-slate-300
                  dark:hover:border-slate-500
                "
              >
                Close
              </button>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DynamicData;

   