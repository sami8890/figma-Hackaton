# Furniro - Modern E-commerce Platform 🏩

## Overview

Welcome to my Project **Furniro**.  
Furniro is a best modern e-commerce platform designed for furniture selling and shopping experience.  
This website is created by me, **Muhammad Sami** (Roll Number: **00490806**), as part of an assignment from **Sir Ameen Alam** and the **GIAIC team**. This project has helped me to understand key concepts of **Next.js 15 with TypeScript, GSAP, Tailwind CSS, Sanity CMS (backend), Clerk (authentication), and Stripe (payment processing).**  
I have also learned a lot about how e-commerce websites work in the real world. and how to craete a complete e-commerce website from scratch. here is the some key features of this project that you can explore 

## ✨ Key Features

- **Responsive Design**: 9 fully responsive pages optimized for desktop, tablet, and mobile devices.
- **Product Management**: Manage products using **Sanity Studio**, including adding and deleting items via **Sanity CMS**.
- **User Authentication**: Secure login and registration system using **Clerk**.too easy to use but in the future i will migrate to **NextAuth.js** because it has more customization options. making it producrion ready 

- **Shopping Cart & Wishlist**: Implemented shopping cart functionality using **Context API** and stored it in **local storage**.
- **Payment Integration**: Secure payment using **Stripe**.
- **Checkout Process**: Seamless checkout process integrating **Stripe** and **Sanity CMS**.

## 🛠️ Technologies Used

- **Frontend**: Next.js 15 with TypeScript for building a fast, responsive, and interactive user experience.
- **Styling**: Tailwind CSS for a modern and responsive design.
- **Animations**: GSAP (GreenSock Animation Platform) – a lightweight and powerful animation library
- **Content Management**: Sanity CMS 
- **Authentication**: Clerk (with plans to migrate to NextAuth.js in the future)
- **Payment Processing**: Stripe
- **State Management**: Context API (for cart & wishlist)


## 💯 Product Schema (Sanity CMS)

``` typeScript
// src/sanity/schemaTypes/product.ts
import { defineField, defineType } from "sanity";
import { TrolleyIcon } from "@sanity/icons";

export const productApi = defineType({
    name: "productss",
    title: "Product",
    type: "document",
    icon: TrolleyIcon,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "productImage",
            title: "Product Image",
            type: "image",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "isNew",
            title: "New Badge",
            type: "boolean",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 200,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "inStock",
            title: "In Stock",
            type: "boolean",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "stock",
            title: "Stock",
            type: "number",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "reviews",
            title: "Reviews",
            type: "number",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "colors",
            title: "Colors",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "discountPrice",
            title: "Discount Price",
            type: "number",
        }),
    ],

    preview: {
        select: {
            title: "title",
            media: "productImage",
            subtitle: "price",
            inStock: "inStock",
            stock: "stock",
        },
        prepare({ title, subtitle, media, inStock, stock }) {
            return {
                title,
                subtitle: `${subtitle} | ${inStock ? `In Stock (${stock})` : "Out of Stock"}`,
                media,
            };
        },
    },
});
```


This is the schema for products . 



## 🎯 Conclusion
This is the end of the **Furniro e-commerce platform**.readme file  
The **Furniro e-commerce platform** make the life easy to buy furniture. 
 

----------

**Created by** **Muhammad Sami (00490806)**  
*Assignment from the **GIAIC team** and **Sir Ameen Alam***
