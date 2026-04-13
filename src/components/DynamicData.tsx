import React, { useEffect, useState } from "react";

type Repo = {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
  stargazers_count: number;
};

export const DynamicData: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);

  const GITHUB_USERNAME = "Cebisile28";

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`
        );

        if (!res.ok) {
          throw new Error("GitHub API error");
        }

        const data = await res.json();

        setRepos(data);
        setFilteredRepos(data);
      } catch (err) {
        setError("Failed to load repositories.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const filterRepos = (language: string) => {
    if (language === "All") {
      setFilteredRepos(repos);
    } else {
      setFilteredRepos(
        repos.filter((repo) => repo.language === language)
      );
    }
  };

  // ✅ LOADING STATE (THIS IS THE IMPORTANT PART)
  if (loading) {
    return (
      <p className="text-center py-10 text-gray-600 dark:text-gray-300">
        Loading projects...
      </p>
    );
  }

  // ❌ ERROR STATE
  if (error) {
    return (
      <p className="text-center py-10 text-red-500">{error}</p>
    );
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
          My Projects & Skills
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {["All", "JavaScript", "TypeScript", "Python"].map((lang) => (
            <button
              key={lang}
              onClick={() => filterRepos(lang)}
              className="bg-amber-400 px-4 py-2 rounded-md font-semibold hover:bg-amber-500 transition"
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Repo Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            >
              <h3 className="font-bold text-xl mb-2">
                {repo.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {repo.description || "No description available"}
              </p>

              <p className="text-sm text-amber-500">
                {repo.language || "Unknown"}
              </p>

              <p className="text-sm text-gray-500 mb-4">
                ⭐ {repo.stargazers_count}
              </p>

              <div className="flex justify-between items-center mt-4">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-400 text-black font-semibold py-2 px-4 rounded-md hover:bg-amber-500 transition"
                >
                  View
                </a>

                <button
                  onClick={() => setSelectedRepo(repo)}
                  className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-gray-400 transition"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedRepo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-700 rounded-lg p-8 max-w-md w-full relative">
            <h3 className="text-2xl font-bold mb-4">
              {selectedRepo.name}
            </h3>

            <p className="mb-2">
              {selectedRepo.description || "No description available"}
            </p>

            <p className="text-sm text-amber-500 mb-2">
              Language: {selectedRepo.language || "Unknown"}
            </p>

            <p className="text-sm mb-4">
              ⭐ {selectedRepo.stargazers_count} stars
            </p>

            <a
              href={selectedRepo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-amber-400 px-4 py-2 rounded-md hover:bg-gray-800 transition"
            >
              GitHub Link
            </a>

            <button
              onClick={() => setSelectedRepo(null)}
              className="absolute top-2 right-2 text-lg font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

   