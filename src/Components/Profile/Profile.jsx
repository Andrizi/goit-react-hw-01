import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>
      <ul className={css.listElements}>
        <li className={css.element}>
          <span className={css.span}>Followers</span>
          <span className={css.span}>{followers}</span>
        </li>
        <li className={css.element}>
          <span className={css.span}>Views</span>
          <span className={css.span}>{views}</span>
        </li>
        <li className={css.element}>
          <span className={css.span}>Likes</span>
          <span className={css.span}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
