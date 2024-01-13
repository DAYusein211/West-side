import { connectMongoDB } from '@/lib/mongodb';
import {ObjectId} from 'mongodb'

export default async (req, res)=>
{
    try {
    const client = await connectMongoDB();
    const db = client.db("users");
    const { id } = req.query;
    const { name, balance } = req.body;

    const post = await db.collection("posts").updateOne(
      {
        _id: ObjectId(id),
      },
      {
        $set: {
          name:name,
          balance:balance
        },
      }
    );

    res.json(post);

  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
}
