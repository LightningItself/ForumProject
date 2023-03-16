import clientPromise from "mongo.config";
import { InsertOneOptions } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const endpoint = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise;
  const db = client.db("forum-project-db");
  //POST
  if (req.method === "POST") {
    const community = {
      communityName: req.body?.communityName,
      creatorEmail: req.body?.creatorEmail,
      privacyType: req.body?.privacyType,
      noOfMembers: req.body?.noOfMembers,
      createdAt: req.body?.createdAt,
    };
    //check if community exists TODO
    const existingCommunity = await db
      .collection("communities")
      .find({ communityName: community.communityName })
      .toArray();
    if (existingCommunity.length != 0) res.status(400).end();
    try {
      await db.collection("communities").insertOne(community);
    } catch (err) {
      res.status(500).end();
    }
    res.status(201).end();
  }
  //GET
  if (req.method === "GET") {
    try {
      const communities = await db.collection("communities").find({}).toArray();
      res.json(communities);
    } catch (err) {
      res.status(500).end();
    }
  }
  res.status(403).end();
};

export default endpoint;
