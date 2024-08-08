import axios from "axios";

export const fetchMapData = (uuid: string) => async () => {
  const response = await axios.get<
    | { status: 200; data: { splash: string; displayName: string } }
    | { status: 400 | 404; error: string }
  >("https://valorant-api.com/v1/maps/" + uuid);

  if (response.status == 200 && response.data.status == 200) {
    return response.data.data;
  }

  throw Error("Invalid uuid");
};
