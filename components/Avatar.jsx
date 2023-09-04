const Avatar = ({ img, alt }) => (
  <div className="flex items-center justify-center">
    <div className="flex-shrink-0">
      <img className="h-20 w-20 rounded-full" src={img} alt={alt} />
    </div>
  </div>
);
export default Avatar;