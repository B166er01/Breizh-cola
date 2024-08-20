const { useState, useLayoutEffect, useRef } = React;
const Intro = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      let sections = gsap.utils.toArray(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".intro_slide",
          pin: true,
          scrub: 0.5,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 0.05,
          },
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: "+=3500",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="container intro_slide">
      {[...Array(3)].map((e, i) => {
        return (
          <section className="min-h-screen min-vw-100 panel" key={i}>
            <div className="flex flex-col md:flex-row-reverse bg-[url(https://source.unsplash.com/random/1)] bg-no-repeat bg-cover">
              <div className="flex flex-col min-h-screen basis-full bg-gradient-to-b md:bg-gradient-to-r from-black opacity-90 md:flex-row">
                <div className="my-auto text-xl text-white basis-1/3">
                  <h1>Hiiii</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi porro repudiandae praesentium doloribus aliquam, in
                    quibusdam reiciendis excepturi harum officiis nostrum
                    obcaecati. Quibusdam, velit placeat maiores in quidem quo.
                    Beatae?
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

ReactDOM.render(<Intro />, document.getElementById("root"));
