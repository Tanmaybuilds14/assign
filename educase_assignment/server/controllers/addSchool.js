import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import dotenv from 'dotenv';
dotenv.config();
//pool connection
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});
//prisma object
const prisma = new PrismaClient({
  adapter: new PrismaPg(pool)
});


const addSchool = async (req, res) => {
  try {
    // actual data from the request
    const { name, address, latitude, longitude } = req.body;

    //object sent to the database 
    const schools = await prisma.school.create({
      data: {
        name:name,
        address:address,
        latitude:Number(latitude),
        longitude:Number(longitude),
      }
    });

    res.status(200).json({
      success: true,
      msg: 'Document created successfully'
    });

  } catch (error) {
    console.error(error)
    console.error(error.message);
    res.status(500).json({
      success: false,
      msg: 'Internal server error'
    });
  }
}

export default addSchool