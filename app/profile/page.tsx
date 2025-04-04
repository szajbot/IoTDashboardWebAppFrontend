'use client'

import { title } from "@/components/primitives";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchData } from "./actions";
import { Skeleton } from "@heroui/skeleton";

export default function ProfilePage() {
  const router = useRouter();
  const [isLoadedPage, setIsLoadedPage] = useState(false); // Initially set to false to show loading state
  const [textFromBackend, setTextFromBackend] = useState('Loading...'); // State to store the response data

  useEffect(() => {
    const isLoggedIn = JSON.parse(sessionStorage.getItem('isLoggedIn') || 'false');
    const accessToken = sessionStorage.getItem('access_token');

    if (!isLoggedIn || !accessToken) {
      router.push('/login');  // Redirect to login if session storage variables are not set correctly
    } else {
      fetchData(accessToken)
        .then(data => {
          setTextFromBackend(data.response); // Update the state with the fetched data
          setIsLoadedPage(true); // Set the page as loaded
        })
        .catch(err => {
          console.log(err);
          setTextFromBackend('Error loading data'); // Update state with error message
          setIsLoadedPage(true); // Set the page as loaded even if there's an error
        });
    }
  }, [router]);

  return (
    <div>
      <Skeleton disableAnimation={true} className="bg-background" isLoaded={isLoadedPage}>
        <h1 className={title()}>{textFromBackend}</h1>
      </Skeleton>
    </div>
  );
}
