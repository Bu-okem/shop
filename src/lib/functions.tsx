import { Databases } from 'appwrite';

import { account, client } from '../appwriteconfig';

const database = new Databases(client);

const Database_ID = import.meta.env.VITE_DATABASE_ID;
const Products_Collection_ID = import.meta.env.VITE_PRODUCTS_COLLECTION_ID;
export const getUserDetails = async () => {
  try {
    let response = await account.get();

    const id = response.$id;
    const name = response.name;
    const email = response.email;

    return {
      id: id,
      name: name,
      email: email,
    };
  } catch (error) {
    console.error(error);
  }
};

export const getProducts = async () => {
  try {
    let response = await database.listDocuments(
      Database_ID, // databaseId
      Products_Collection_ID // collectionId
    );
    return response.documents;
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id: string) => {
  try {
    let response = await database.getDocument(
      Database_ID, // databaseId
      Products_Collection_ID, // collectionId
      id
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
