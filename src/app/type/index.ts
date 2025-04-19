export type TestimonialCardProps = {
  name: string;
  rating: number;
  testimonial: string;
  imgUrl: string | null;
};

export type ArrowProps = {
  onClick: () => void,
  to: string
}