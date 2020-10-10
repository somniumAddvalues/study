import asyncRoute from 'lib/asyncRoute'
// 프로덕션에서만 코드 스플리팅을 적용하기 위한 index 파일

export const Home = asyncRoute(() => import('./Home'))
export const Test = asyncRoute(() => import('./Test'))
export const About = asyncRoute(() => import('./About'))
export const Post = asyncRoute(() => import('./Post'))
export const Posts = asyncRoute(() => import('./Posts'))