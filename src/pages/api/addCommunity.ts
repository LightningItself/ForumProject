import clientPromise from "@/mongo/mongodb";

const communityRoute = async (req: any, res: any) => {
  try {
    const client = await clientPromise;
    const db = client.db("forum-project-db");
    const { title, content } = req.body;

    const post = await db.collection("communitys").insertOne({
      title,
      content,
    });

    res.json(post);
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
};

export default communityRoute;
