const conf = {
    appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
    navCollectionId: String(process.env.NEXT_PUBLIC_NAVBAR_COLLECTION_ID),
    aboutMeCollectionId: String(process.env.NEXT_PUBLIC_ABOUT_ME_COLLECTION_ID),

    achievementsCollectionId: String(process.env.NEXT_PUBLIC_ACHIEVEMENTS_COLLECTION_ID),
}

export default conf