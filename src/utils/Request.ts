const uri = "http://127.0.0.1:7001/";

export async function getUserData(account: string, password: string) {
  try {
    const res: any = await fetch(`${uri}user/login?name=${account}&pwd=${password}`);
    if (!res.ok) throw new Error("There was an error on server");
    if (res._bodyBlob?._data.size < 1) throw new Error("User not found");

    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
}

export async function postData(path: string) {
  try {
    const res = await fetch(`${uri + path}`, {
      method: "POST",
    });
    console.log(res);
    // if (!res.status) throw new Error("Failed to load data");

    // return
  } catch (error) {}
}
