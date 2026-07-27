import { supabase } from "./supabase";
import type { User } from "@supabase/supabase-js";


type SupabaseErrorInfo = {
  message: string;
};


type AuthResult = {
  data: {
    user: User | null;
  } | null;

  error: SupabaseErrorInfo | null;
};



const formatError = (err: unknown): SupabaseErrorInfo => {

  if (err instanceof Error) {
    return {
      message: err.message,
    };
  }


  if (
    typeof err === "object" &&
    err !== null &&
    "message" in err
  ) {
    return {
      message: String(
        (err as { message: unknown }).message
      ),
    };
  }


  return {
    message: "An unexpected error occurred.",
  };

};





export const signUp = async (
  fullName: string,
  email: string,
  password: string,
  role: "buyer" | "seller"
): Promise<AuthResult> => {

  try {

    const {
      data,
      error,
    } = await supabase.auth.signUp({

      email,
      password,

      options: {

        data: {
          full_name: fullName,
          role,
        },

      },

    });



    if (error) {

      return {

        data: null,

        error: {
          message: error.message,
        },

      };

    }



    return {

      data: {
        user: data.user,
      },

      error: null,

    };



  } catch (err: unknown) {

    return {

      data: null,

      error: formatError(err),

    };

  }

};







export const signIn = async (
  email: string,
  password: string
): Promise<AuthResult> => {

  try {

    const {
      data,
      error,
    } = await supabase.auth.signInWithPassword({

      email,
      password,

    });



    return {

      data: data.user
        ? {
            user: data.user,
          }
        : null,


      error: error
        ? {
            message: error.message,
          }
        : null,

    };



  } catch (err: unknown) {

    return {

      data: null,

      error: formatError(err),

    };

  }

};







export const signOut = async (): Promise<{
  error: SupabaseErrorInfo | null;
}> => {

  try {

    const { error } = await supabase.auth.signOut();



    return {

      error: error
        ? {
            message: error.message,
          }
        : null,

    };



  } catch (err: unknown) {

    return {

      error: formatError(err),

    };

  }

};






export default {
  signIn,
  signUp,
  signOut,
};
