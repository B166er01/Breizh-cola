useGSAP(() => {
  // Ensure all refs are attached
  if (
    imageRef1.current &&
    imageRef2.current &&
    imageRef3.current &&
    imageRef4.current
  ) {
    // Create a GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        //   pinSpacing: true,
        start: "bottom 10%", // When the top of the music-sponsort section is at 20% of the viewport
        markers: true, // Set to true if you want to see the start and end markers (remove this line in production)
        toggleActions: "play none none none",
      },
    });

    // Add animations to the timeline
    tl.to(imageRef2.current, {
      x: "20vw", // Custom x position
      y: "-5vh", // Custom y position
      duration: 0.2,
      ease: "back.out",
    }) // Stagger by 0.2 seconds relative to the previous animation
      .to(
        imageRef3.current,
        {
          x: "-19vw", // Custom x position
          y: "-2vh", // Custom y position
          duration: 0.2,
          ease: "back.out",
        },
        "<0.07"
      ) // Stagger by 0.2 seconds relative to the previous animation
      .to(
        imageRef4.current,
        {
          x: "35vw", // Custom x position
          y: "15vh", // Custom y position
          duration: 0.2,
          ease: "back.out",
        },
        "<0.07"
      )
      .to(
        imageRef5.current,
        {
          x: "-35vw", // Custom x position
          y: "12vh", // Custom y position
          duration: 0.2,
          ease: "back.out",
        },
        "<0.07"
      ) // Stagger by 0.2 seconds relative to the previous animation
      .to(
        imageRef6.current,
        {
          x: "38vw", // Custom x position
          y: "-15vh", // Custom y position
          duration: 0.2,
          ease: "back.out",
        },
        "<0.07"
      ) // Stagger by 0.2 seconds relative to the previous animation
      .to(
        imageRef7.current,
        {
          x: "-38vw", // Custom x position
          y: "-15vh", // Custom y position
          duration: 0.2,
          ease: "back.out",
        },
        "<0.07"
      ) // Stagger by 0.2 seconds relative to the previous animation
      .to(
        imageRef8.current,
        {
          x: "42vw", // Custom x position
          y: "42vh", // Custom y position
          duration: 0.2,
          ease: "back.out",
        },
        "<0.07"
      ) // Stagger by 0.2 seconds relative to the previous animation
      .to(
        imageRef9.current,
        {
          x: "-42vw", // Custom x position
          y: "42vh", // Custom y position
          duration: 0.2,
          ease: "back.out",
        },
        "<0.07"
      ) // Stagger by 0.2 seconds relative to the previous animation
      .to(
        imageRef10.current,
        {
          x: "-8vw", // Custom x position
          y: "27vh", // Custom y position
          duration: 0.2,
          ease: "back.out",
        },
        "<0.07"
      ) // Stagger by 0.2 seconds relative to the previous animation
      .to(
        imageRef11.current,
        {
          x: "21vw", // Custom x position
          y: "28vh", // Custom y position
          duration: 0.2,
          ease: "back.out",
        },
        "<0.07"
      ) // Stagger by 0.2 seconds relative to the previous animation
      .to(
        imageRef12.current,
        {
          x: "-24vw", // Custom x position
          y: "38vh", // Custom y position
          duration: 0.2,
          ease: "back.out",
        },
        "<0.07"
      ) // Stagger by 0.2 seconds relative to the previous animation
      .to(
        imageRef13.current,
        {
          x: "7vw", // Custom x position
          y: "35vh", // Custom y position
          duration: 0.2,
          ease: "back.out",
        },
        "<0.07"
      ); // Stagger by 0.2 seconds relative to the previous animation
  }
}, []);
