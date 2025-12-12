import { Client } from "@googlemaps/google-maps-services-js";
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  try {
    const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY_SERVER || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!placeId) {
      return NextResponse.json(
        { error: 'Google Place ID not configured' },
        { status: 500 }
      );
    }

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Google Maps API key not configured' },
        { status: 500 }
      );
    }

    const client = new Client({});

    const response = await client.placeDetails({
      params: {
        place_id: placeId,
        fields: [
          'name',
          'rating',
          'user_ratings_total',
          'reviews',
          'photos',
          'opening_hours',
          'formatted_address',
          'formatted_phone_number',
          'website',
        ],
        key: apiKey,
      },
      timeout: 5000,
    });

    if (!response.data.result) {
      return NextResponse.json(
        { error: 'No business data found' },
        { status: 404 }
      );
    }

    return NextResponse.json(response.data.result, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
  } catch (error: any) {
    console.error('GMB API Error:', error.message || error);

    // Return fallback data from constants
    return NextResponse.json(
      {
        error: 'Failed to fetch business data',
        fallback: true,
        message: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}
