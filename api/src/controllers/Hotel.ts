import { NextFunction, Request, Response } from "express";
import cloudinary from "cloudinary";
import { HotelSearchResponse, HotelType } from "../types/data";
import Hotel from "../models/Hotel";

export const searchHotel = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {

        const query = constructedSearchQuery(req.query)
        // number of hotels to display per page (5 in this case)
        const pageSize = 5;
        const pageNumber = parseInt(
            req.query.page ? req.query.page.toString() : "1"
        )

        const skip = (pageNumber - 1) * pageSize;
        const hotels = await Hotel.find().skip(skip).limit(pageSize);
        const total = await Hotel.countDocuments();

        const response:HotelSearchResponse = {
            data: hotels,
            pagination: {
                total,
                page: pageNumber,
                pages: Math.ceil(total/pageSize)
            },
        };
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
};

const constructedSearchQuery = (queryParams: any) => {
let constructedQuery: any = {};

  if (queryParams.destination) {
    constructedQuery.$or = [
      { city: new RegExp(queryParams.destination, "i") },
      { country: new RegExp(queryParams.destination, "i") },
    ];
  }

  if (queryParams.adultCount) {
    constructedQuery.adultCount = {
      $gte: parseInt(queryParams.adultCount),
    };
  }

  if (queryParams.childCount) {
    constructedQuery.childCount = {
      $gte: parseInt(queryParams.childCount),
    };
  }

  if (queryParams.facilities) {
    constructedQuery.facilities = {
      $all: Array.isArray(queryParams.facilities)
        ? queryParams.facilities
        : [queryParams.facilities],
    };
  }

  if (queryParams.types) {
    constructedQuery.type = {
      $in: Array.isArray(queryParams.types)
        ? queryParams.types
        : [queryParams.types],
    };
  }

  if (queryParams.stars) {
    const starRatings = Array.isArray(queryParams.stars)
      ? queryParams.stars.map((star: string) => parseInt(star))
      : parseInt(queryParams.stars);

    constructedQuery.starRating = { $in: starRatings };
    }
}


///// we  arw in total agreement with our mutual disagppointed at you

// export const deleteHotel = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     await Hotel.findByIdAndDelete(req.params.id);
//     res.status(201).json("Hotel has been deleted successfully.");
//   } catch (err) {
//     next(err);
//   }
// };

// export const findHotel = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const findHotel = await Hotel.findById(req.params.id);
//     res.status(200).json(findHotel);
//   } catch (err) {
//     next(err);
//   }
// };

// interface IReq {
//   min: number;
//   max: number;
// }
// export const findAllHotels = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { min, max, ...others } = req.query;
//   const {} = req.query;
//   const limitedResult: any = req.query.limit;

//   try {
//     const findAllHotels = await Hotel.find({
//       ...others,
//       cheapestPrice: {
//         gt: min || 1,
//         lt: max || 9000,
//       },
//     }).limit(limitedResult);
//     res.status(200).json(findAllHotels);
//   } catch (err) {
//     next(err);
//   }
// };

// // export const findAllHotels = async (
// //   req: Request,
// //   res: Response,
// //   next: NextFunction
// // ) => {
// //   const limitedResult: any = req.query.limit;
// //   const { min, max, ...others } = req.query;
// //   try {
// //     const findAllHotels = await Hotel.find();
// //     res.status(200).json(findAllHotels);
// //   } catch (err) {
// //     next(err);
// //   }
// // };

// interface IHotels {
//   split(arg0: string): unknown;
//   cities: any;
// }

// export const findHotelByCity = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   /* Splitting the cities by comma. */
//   const cities: any = req.query.cities;
//   const splitedCity = cities.split(",");
//   try {
//     /* Counting the number of documents in the database. */
//     const list = await Promise.all(
//       splitedCity.map((city: any) => {
//         return Hotel.countDocuments({ city });
//       })
//     );
//     res.status(200).json(list);
//   } catch (err) {
//     next(err);
//   }
// };
// export const findHotelByType = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const hotelCount = await Hotel.countDocuments({ type: "hotel" });
//     const resortCount = await Hotel.countDocuments({ type: "resort" });
//     const appartmentCount = await Hotel.countDocuments({ type: "appartment" });
//     const villaCount = await Hotel.countDocuments({ type: "villa" });
//     const cabinCount = await Hotel.countDocuments({ type: "cabin" });
//     res.status(200).json([
//       { type: "hotel", count: hotelCount },
//       { type: "cabin", count: cabinCount },
//       { type: "appartment", count: appartmentCount },
//       { type: "resort", count: resortCount },
//       { type: "villa", count: villaCount },
//     ]);
//   } catch (err) {
//     next(err);
//   }
// };
