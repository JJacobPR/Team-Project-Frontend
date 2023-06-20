import descriptionStyles from "./Description.module.css";

const Description = () => {
  return (
    <div className={descriptionStyles.desc_wrapper}>
      <p className={descriptionStyles.maind}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
        enim eu tempor pellentesque. Vestibulum nec finibus purus. In hac
        habitasse platea dictumst. Sed consectetur ante nec nisl ultrices, et
        lobortis velit consequat. Fusce vulputate augue id interdum consequat.
        Praesent quis nibh eget ipsum tristique rutrum. Phasellus interdum
        finibus ligula at bibendum. Morbi in aliquet risus, eu lacinia tellus.
        Integer eget fermentum purus, non maximus dui. Aenean ac eleifend
        turpis. Cras lacinia interdum metus, eget ullamcorper nisl placerat nec.
        Quisque aliquet lectus ac tellus viverra, sed convallis ligula placerat.
        Proin vitae est in ante sagittis egestas vel at lacus. Phasellus id urna
        justo. Sed nec velit quis dolor aliquam pharetra."
      </p>
    </div>
  );
};

export default Description;
