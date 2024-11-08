import { Databases, Query } from 'appwrite';

import { account, client } from '../appwriteconfig';

const database = new Databases(client);

const Database_ID = import.meta.env.VITE_DATABASE_ID;
const Products_Collection_ID = import.meta.env.VITE_PRODUCTS_COLLECTION_ID;
const Orders_Collection_ID = import.meta.env.VITE_ORDERS_COLLECTION_ID;
const Order_Item_Collection_ID = import.meta.env.VITE_ORDERITEMS_COLLECTION_ID;

export const logoutUser = () => {
  //delete session
  const deleteSession = account.deleteSession('current');

  deleteSession.then(
    function () {
      //delete cart from localstorage
      localStorage.clear();
      window.location.href = '/login';
    },
    function (error) {
      console.log(error);
    }
  );
};

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

export const getOrdersByUser = async (userId: string) => {
  try {
    let response = await database.listDocuments(
      Database_ID,
      Orders_Collection_ID,
      [Query.equal('userId', userId)]
    );
    return response.documents;
  } catch (error) {
    console.error(error);
  }
};

export const getOrderItems = async (orderId: string) => {
  try {
    let response = await database.listDocuments(
      Database_ID,
      Order_Item_Collection_ID,
      [Query.equal('orderId', orderId)]
    );
    return response.documents;
  } catch (error) {
    console.error(error);
  }
};
