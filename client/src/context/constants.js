export const apiURL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "somedeployedURL";

export const LOCAL_STORAGE_TOKEN_NAME = "digiticket";
