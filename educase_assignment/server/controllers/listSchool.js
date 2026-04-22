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


const toRad = (value) => (value * Math.PI) / 180;

const getDistanceKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const listSchools = async (req, res) => {
  try {
    const userLat = Number(req.query.latitude);
    const userLon = Number(req.query.longitude);

    if (Number.isNaN(userLat) || Number.isNaN(userLon)) {
      return res.status(400).json({
        success: false,
        msg: "Valid latitude and longitude are required",
      });
    }

    const schools = await prisma.school.findMany();

    const sortedSchools = schools
      .filter(
        (school) =>
          school.latitude !== null &&
          school.longitude !== null
      )
      .map((school) => ({
        ...school,
        distanceKm: getDistanceKm(
          userLat,
          userLon,
          school.latitude,
          school.longitude
        ),
      }))
      .sort((a, b) => a.distanceKm - b.distanceKm);

    res.status(200).json({
      success: true,
      count: sortedSchools.length,
      schools: sortedSchools,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

export default listSchools;