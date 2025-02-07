//src/sanity/lib/fetch.ts
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2021-03-25",
    useCdn: true,
});

export async function sanityFetch({ query, params = {} }: { query: string; params?: object }) {
    return await client.fetch(query, params);
}
