"use client";

import React, { useEffect, useRef } from "react";
import Matter, { Engine, Render, Bodies, World, Body } from "matter-js";
import {
  js,
  mobx,
  mongo,
  nest,
  next,
  node,
  postgres,
  react,
  redux,
  scss,
  ts,
} from "@/assets/images";
import { StaticImageData } from "next/image";
import { getRandomInt } from "@/lib/utils";
const Sandbox = () => {
  const scene = useRef<HTMLDivElement>(null);
  const engine = useRef<Matter.Engine | null>(null);

  useEffect(() => {
    const isPhone = Number(document.documentElement.clientWidth) <= 550;
    const width = !isPhone
      ? 480
      : Number(document.documentElement.clientWidth) - 60;
    const height = !isPhone ? 300 : 180;
    engine.current = Matter.Engine.create();
    const render = Matter.Render.create({
      element: scene.current as HTMLDivElement,
      engine: engine.current,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: "rgba(255,255,255,0.1)",
      },
    });

    // Создание земли
    const ground = Matter.Bodies.rectangle(width, height + 30, width * 2, 60, {
      isStatic: true,
    });
    const leftWall = Bodies.rectangle(-30, height, 60, height * 2, {
      isStatic: true,
    });
    const rightWall = Bodies.rectangle(width + 30, height, 60, 600, {
      isStatic: true,
    });
    const ceiling = Bodies.rectangle(400, -30, 810, 60, { isStatic: true });

    const logos = [
      js,
      react,
      mobx,
      ts,
      next,
      scss,
      redux,
      nest,
      postgres,
      node,
      mongo,
    ];

    const balls = logos.map((logo: StaticImageData, index) => {
      const ball = Matter.Bodies.circle(
        (width / 4) * getRandomInt(5),
        50 * getRandomInt(4),
        30,
        {
          density: 0.04,
          render: {
            sprite: {
              xScale: 1,
              yScale: 1,
              texture: logo.src,
            },
          },
        }
      );
      return ball;
    });

    Matter.World.add(engine.current.world, [
      ground,
      leftWall,
      rightWall,
      ceiling,
      ...balls,
    ]);

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    World.add(engine.current.world, mouseConstraint);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine.current);
    Matter.Render.run(render);

    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(engine.current!.world, false);
      Matter.Engine.clear(engine.current!);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <>{document.documentElement.clientWidth >= 700 && <div ref={scene} />}</>
  );
};

export default Sandbox;
