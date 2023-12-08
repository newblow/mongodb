import { Db, MongoClient, MongoClientOptions, ServerApiVersion } from "mongodb";

const options: MongoClientOptions = {
  serverApi: ServerApiVersion.v1,
};

const uri =
  "mongodb+srv://devblow:azerty123@cluster0.nspdj3e.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, options);

client.connect().catch((err) => console.error(err));

export default client;
