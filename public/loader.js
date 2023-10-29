const bar = document.querySelector(".loading__bar--inner");
const counter_number = document.querySelector(".loading__counter--number");

let counter = 0;

let barInterval = setInterval(() => {
	bar.style.width = counter + "%";
	counter_number.innerText = counter + "%";
	counter++;

	if (counter === 101) {
		clearInterval(barInterval);

		// Make the progress bar go off screen.
		gsap.to(".loading__bar", {
			duration: 2,
			rotate: "20deg",
			opacity: 0
		});

		// Make the text dissapear.
		gsap.to(".loading__text, .loading__counter", {
			duration: 1,
			opacity: 0
		});

		// Turn the box into a circle.
		gsap.to(".loading__box", {
			duration: 1,
			delay: 1,
			height: "500px",
			borderRadius: "50%",
			borderWidth: "1px"
		});

		// Make the loading svg appear.
		gsap.to(".loading__svg", {
			duration: 20,
			delay: 1,
			opacity: 1,
			rotate: "360deg"
		});

		// Turn the box into a circle.
		gsap.to(".loading__box", {
			delay: 2,
			duration: 5,
			// border: ""none""
		});

		// Make the background transparent.
		gsap.to(".loading", {
			delay: 2,
			duration: 3,

            // Z index bellow other elements.
			zIndex: 1,
			background: "transparent",

            // Make the image dissapear
			opacity: 0,

		}).then(() => {
            document.querySelector('.loading').style.display = 'none';

            // Check if the device is a mobile device
            if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
                const hiddenInput = document.getElementById('hidden-input');
                hiddenInput.focus();
            }
        });
	}
}, 20);
