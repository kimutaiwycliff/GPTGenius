'use client';
import { useMutation } from '@tanstack/react-query';
import TourInfo from './TourInfo';
import { createTourResponse } from '@/utils/action';
import toast from 'react-hot-toast';

const NewTour = () => {
  const {
    mutate,
    isPending,
    data: tour,
  } = useMutation({
    mutationKey: 'createNewTour',
    mutationFn: async destination => {
      const newTour = await createTourResponse(destination);
      if (newTour) {
        return newTour;
      }
      toast.error('No matching city found.....');
    },
  });
  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    mutate(destination);
  };
  if (isPending) {
    return <span className="loading loading-lg"></span>;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl">
        <h2 className="mb-4">Select your dream destination</h2>
        <div className="join w-full">
          <input
            type="text"
            placeholder="City"
            className="input input-bordered join-item w-full"
            name="city"
            required
          />
          <input
            type="text"
            placeholder="Country"
            className="input input-bordered join-item w-full"
            name="country"
            required
          />
          <button
            className="btn btn-primary join-item"
            type="submit"
            disabled={isPending}
          >
            Create Tour
          </button>
        </div>
      </form>
      <div className="mt-16">{tour ? <TourInfo tour={tour} /> : null}</div>
    </>
  );
};
export default NewTour;
