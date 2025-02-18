import React from "react";
import Cube from "./Cube";

const Section2 = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Cube
        key={"cube1"}
        position={"left-[20%] top-[115%]"}
        imageUrl={
          "https://s3-alpha-sig.figma.com/img/c868/7cc8/c3ad239f910f65b25f01df837fb0546f?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=T3TnpN-sIGA4n-Q89SoK1~31~dYx5fSjOBFDhWLJ7rWKSMeXiGzGzn0WcSdnB8m8brD6rJTq~ux0vreg7SyylvVrNNthjfSI~7KUoqrU6s1ZGtDvHAZPV8rGaqrNWoziyhTMhOISTJmj86n6IB2QbU6OtG1EzWlyR7h05EsRx14u4kjf~mPNgqaDdl8xSahry703C1oEhxY~v-6sGQuIVCJuyB7JLrS0kKuSbANt6a~~145cRLwBYLHtBoKMGuwIog2E1OJZGDgOS4mG3I6x3p3ayfssv5Ug~EQ5Ol8EkoyN-jZ15nFTvH2whB0XlCBe2wKImwsbWRGwA7wbKh5PaA__"
        }
      />
      <Cube
        key={"cube2"}
        position={"left-[10%] top-[140%]"}
        imageUrl={
          "https://s3-alpha-sig.figma.com/img/76b3/87b9/f9b2f6fc964189431a4d142f48aaa542?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KLR6SRVqMHt5V4lAYIo0cjLuefrR2p9cNo5mQ6giyeMugsl7D5MKErug20zxUIYoZqTBR5EINEpiwTkeD51-g0c5AhYPaFbpN6dW3EgXg-YhJrLcYADWYFV7u-ZS8l4OeBx4GxJNwnae5ke9Zxur5FwJoRdOlGVYX3gORJ62QCKKXSQqMqRWK59T8sCtXTsDqCv3WFSma-kylPNixlKbjRQjjmPO1a~vVnOTOBcnvGU8ICPLuyTqnW8Zilw~MpuhQ~~Op04V3ICqrei9aHXxb2fv4Ip2i9IrIUIpRiu0SRJUF5gp23v-lrMHCQvSGumsYWI3zt~tIoV0tb7uUVjzKA__"
        }
      />
      <Cube
        key={"cube3"}
        position={"left-[20%] top-[165%]"}
        imageUrl={
          "https://s3-alpha-sig.figma.com/img/bc65/5389/da58b13911e2ef37c931c67e4f8c0a58?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Rli~tnDJHeayUmQIsPxMvjpLD~ObvNw6ZoXMTiIoCvIlH4zBA8p08hNo3I~xImasXvyVK07SeSc8zA7APg0r1cRGie46xdluTL6Szh545Fo~qqcAOtE2dkkxYYo9Oi8wkeG22HO-O7GGfBTlRNCzKIahU7RTPALmZFt6H0R5KQgpvr8wv9rX6vq-rKgV4RFCGunyXhaT4hCfvJWkkY3UgHrsS6v4peelPp8Juh8qsh7EuaW~BLxyyACpcTmoJ6kTUWP7DGDFrghv4EHf2Y1R0g92SXhpqBn9EumncE9KpI9q0Z8SYzNg-YYR9LOOMB0frShoL5o7KrIjZQzqlulFog__"
        }
      />
      <Cube
        key={"cube4"}
        position={"right-[20%] top-[115%]"}
        imageUrl={
          "https://s3-alpha-sig.figma.com/img/584d/5e3c/0aca890e73a9ff26749c7389914bcc20?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GHW01prsDojapZvEdTGsM5mTE8NE9h6jKPrDrEzWOnufwUZhqHU--SmVhP~onzBfVUHqohCX1~Ub27uZOsrhe30nh857xSLYh-LI8hfwD94Q4gr0VPjo7jJXZvPJxXUYnLwhvBqIabaCAbU51-9Cf9ZQGyAr6RpbHEnYArKoQa7Cyg1x60xbMFexTe~T1YhfawMXyg76H-whTzE1GEi~xd7w32zEyp5XVoMjGpiYkbwoUXkofR0DmwEHiItyagtoP2ZQZC4qhdK9qkofkmJUXSOMwQPOcnEXBzc14bt8LPPiy~O39X1wnKVzYG9EGNtUc2QlMWnxVH790-VTzKJwyQ__"
        }
      />
      <Cube
        key={"cube5"}
        position={"right-[10%] top-[140%]"}
        imageUrl={
          "https://s3-alpha-sig.figma.com/img/b651/52b2/56776383bc519864e7af50c3f48f79ba?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=V9cEaRka8I0O9A45FO2VfT5PLm4fy5PxGspRJMhxxb21J92nSV86oZUeWXZqOp0YVbPzk8iX6-FtnsMOFStlNEPJ2-UNaIqfNbbT-XMAVfSFZz2d9U6J4R5ZF4dgbA5oX3uHET4cog4s5EjFY0~DURlF80EmyquF7kf~DGgZ7XOiaYiLuYFFhnu7oiLLowCsScE~29GO8hhXUvWEt47desq1fzKoEV~MJVuoyBVIrMJ-XIS3I~yyhpa8PQJ-JlRGJBU0wDtIRyYMNBSkDINBEBRUCEinn6jyAmCdA~y3eYcbyy6BEQRGvYyNK8c2uvuIshBK0rj9mJ5ArVGR6AGBNA__"
        }
      />
      <Cube
        key={"cube6"}
        position={"right-[20%] top-[165%]"}
        imageUrl={
          "https://s3-alpha-sig.figma.com/img/8df3/8730/c27e1f3f2347b9c5280adea7bb088028?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D1Bq09aafHnSvmHa7~m9O6lvoMzExIXvpWyEep~nPC9ST4ksbnxc4tg-CyYeN-LVZCL1MFUmBTW-3bgp~j8DSYVsYVzT6zFkVRu3oX-2Ms~9y1d7RzhEI-lcJ6elofAM0rPyVuiBOG~YjloB40ky-fkg0uSWey7g4MEfG1yGOH6dzmMTqEKICcmm2uHrOugAFdbqWgexEf0eqOkRtIX1FnzgnQpXX8sl1EIIIUIcr~UDJ1puiF3Nru9v6wODlMLi6ObaFfM7hoGLBRaBK9O2f1nVsNc7YX~95D~-aybf-IYwkhEN7Mc4VxJ-kOz29wZFODuN3ha6p7bsCaci~aW-YA__"
        }
      />

      <div className="text-[#FFE9D9] font-[Inter] text-center md:w-2/3 px-4">
        <h3 className="text-2xl px-12 md:px-0">
          Where innovation meets precision.
        </h3>
        <p className="font-thin tracking-[0.1em] text-sm md:px-44">
          Symphonia unites visionary thinkers, creative architects, and
          analytical experts, collaborating seamlessly to transform challenges
          into oppurtunities. Together, we deliver tailored solutions that drive
          impact and inspire growth.
        </p>
      </div>
    </div>
  );
};

export default Section2;
