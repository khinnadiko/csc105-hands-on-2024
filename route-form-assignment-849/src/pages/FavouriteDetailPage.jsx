import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const FavouriteDetailPage = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
  return (
    <p>Your favourite post is <strong>{searchParams.get('q')}.</strong> Post ID is <strong>{id}.</strong> Size is <strong>{searchParams.get('size')}.</strong></p>
  )
}

export default FavouriteDetailPage