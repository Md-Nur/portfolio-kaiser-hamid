const conf = {
  appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
  appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID),
  aboutMeDocumentId: String(process.env.NEXT_PUBLIC_ABOUT_ME_DOCUMENT_ID),

  collections: {
    aboutMe: String(process.env.NEXT_PUBLIC_ABOUT_ME_COLLECTION_ID),
    latestNews: String(process.env.NEXT_PUBLIC_LATEST_NEWS_COLLECTION_ID),
    achievements: String(process.env.NEXT_PUBLIC_ACHIEVEMENTS_COLLECTION_ID),
    activities: String(process.env.NEXT_PUBLIC_ACTIVITIES_COLLECTION_ID),
    education: String(process.env.NEXT_PUBLIC_EDUCATION_COLLECTION_ID),
    publication: String(process.env.NEXT_PUBLIC_PUBLICATION_COLLECTION_ID),
    teaching: String(process.env.NEXT_PUBLIC_TEACHING_COLLECTION_ID),
    professionalXp: String(
      process.env.NEXT_PUBLIC_PROFESSIONAL_EXPERIENCE_COLLECTION_ID
    ),
    researchXp: String(
      process.env.NEXT_PUBLIC_RESEARCH_EXPERIENCE_COLLECTION_ID
    ),
    skills: String(process.env.NEXT_PUBLIC_SKILLS_COLLECTION_ID),
    project: String(process.env.NEXT_PUBLIC_PROJECT_COLLECTION_ID),
    nav: String(process.env.NEXT_PUBLIC_NAVBAR_COLLECTION_ID),
  },
};

export default conf;
