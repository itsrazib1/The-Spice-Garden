import React from "react";

const Feedback = () => {
  return (
    <section className="container md:w-9/12 mx-auto px-10 md:px-0 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div>
            <div className="relative flex-shrink-0 w-48 min-h-min">
              <img
                className="relative object-cover w-28 h-28 rounded-full p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-6/337679212_737992261352425_7064005870337292651_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHlSASfMfAuUeGeL3OW1TgbExfbbv42IegTF9tu_jYh6CByjiJ0D2ApBlajbAPmZKW3pIDz0X5oslR1IHuvYKc9&_nc_ohc=vTeEn7-2ytIAX-WncZ2&_nc_ht=scontent.fdac135-1.fna&oh=00_AfAyL_4yEfriRND4my1tqttv_e1Qup_oXA-dB5R0JSxEMQ&oe=645792C5"
                alt=""
              />
            </div>
            <div className="mt-8">
              <blockquote>
                <p className="text-xl text-black dark:text-white">
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam aliquam repellat laborum minima tempore deserunt
                  explicabo placeat! Fugit, molestias nesciunt.”
                </p>
              </blockquote>
              <p className="text-lg font-semibold text-black dark:text-white mt-7">
                Khayrul Kober Razib
              </p>
              <p className="mt-1 text-base text-gray-600">
                Frontend Developer at DevUI
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
          <div>
            <div className="relative flex-shrink-0 w-48 min-h-min">
              <img
                className="relative object-cover w-28 h-28 rounded-full p-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                src="https://scontent.fdac135-1.fna.fbcdn.net/v/t39.30808-1/328521777_711391917072725_1649859154462302940_n.jpg?stp=dst-jpg_p240x240&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeG_mcybhDvFs4xShu6ksDzWCuRhc8HMGgoK5GFzwcwaCvtRAyH1NPs2wnBJG8MjKFvBJQ_xvRkEi_NXs6Y4z3LK&_nc_ohc=OWXT9H9f3e0AX89oLbw&_nc_ht=scontent.fdac135-1.fna&oh=00_AfBqZwVpO9NosbcXAvEv44jtLEsFGMadf7NclWtxBYu_QA&oe=64574D25"
              />
            </div>
            <div className="mt-8">
              <blockquote>
                <p className="text-xl text-black dark:text-white">
                  “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam aliquam repellat laborum minima tempore deserunt
                  explicabo placeat! Fugit, molestias nesciunt.”
                </p>
              </blockquote>
              <p className="text-lg font-semibold text-black dark:text-white mt-7">
                Pronab Saha
              </p>
              <p className="mt-1 text-base text-gray-600">
                BissnessMan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
