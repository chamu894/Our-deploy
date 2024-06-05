// import React from 'react'
// import styled, { keyframes, css } from "styled-components";

// const Iconslider = () => {

//     const row1 = [
//       "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
//       "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
//       "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
//       "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
//       "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
//       "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
//     ];

//     return (
//       <>
//       <AppContainer className="mt-28">
//         <Wrapper>
//           <Marquee>
//             <MarqueeGroup>
//               {row1.map((el) => (
//                 <ImageGroup>
//                   <Image src={el} />
//                 </ImageGroup>
//               ))}
//             </MarqueeGroup>
//             <MarqueeGroup>
//               {row1.map((el) => (
//                 <ImageGroup>
//                   <Image src={el} />
//                 </ImageGroup>
//               ))}
//             </MarqueeGroup>
//           </Marquee>
//         </Wrapper>
//       </AppContainer>

//       <AppContainer/>

//       </>
//     );

// }

// export default Iconslider;

// const AppContainer = styled.div`



// `;

// const Wrapper = styled.div`

// `;


// const Marquee = styled.div`
//   display: flex;
//   width: 1200px;
//   overflow: hidden;
//   user-select: none;

//   mask-image: linear-gradient(
//     to right,
//     hsl(0 0% 0% / 0),
//     hsl(0 0% 0% / 1) 10%,
//     hsl(0 0% 0% / 1) 90%,
//     hsl(0 0% 0% / 0)
//   );
// `;

// const scrollX = keyframes`
//   from {
//     left: translateX(0);
//   }
//   to {
//     transform: translateX(-100%);
//   }
// `;

// const common = css`
//   flex-shrink: 0;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   white-space: nowrap;
//   width: 100%;
//   animation: ${scrollX} 30s linear infinite;
// `;

// const MarqueeGroup = styled.div`
//   ${common}
// `;

// const ImageGroup = styled.div`
//   display: grid;
//   place-items: center;
//   width: clamp(10rem, 1rem + 40vmin, 30rem);
//   padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
// `;

// const Image = styled.img`
//   object-fit: contain;
//   width: 100%;
//   height: 100%;
//   /* border: 1px solid black; */
//   border-radius: 0.5rem;
//   aspect-ratio: 16/9;
//   padding: 5px 20px;
//   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
// `;