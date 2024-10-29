import { account } from '../appwriteconfig';

export const getUserDetails = async () => {
  try {
    let response = await account.get();

    const name = response.name;
    const email = response.email;

    return {
      name: name,
      email: email,
    };
  } catch (error) {
    console.error(error);
  }
};
