# 🌌 N-Body Gravitational Simulation

A real-time 2D N-body gravity simulation built in **JavaScript** using
**HTML5 Canvas**.\
This project models planetary motion using **Newton's Law of Universal
Gravitation** with time-step integration and vector-based force
calculations.

------------------------------------------------------------------------

## 🚀 Features

-   🌍 Multi-body gravitational interactions\
-   🧮 Newtonian inverse-square gravity\
-   ⏱ Adjustable time-step scaling\
-   🎨 Real-time rendering with HTML5 Canvas\
-   🌠 Orbital trail effects\
-   🪐 Scaled solar system parameters

------------------------------------------------------------------------

## 🧠 Physics Model

The simulation implements:

F = G \* (m1 \* m2) / r²

Each frame:

1.  Reset accelerations\
2.  Compute gravitational forces between all bodies\
3.  Update velocities: v = v + a \* dt\
4.  Update positions: x = x + v \* dt

Time scaling allows faster-than-real-time simulation while maintaining
physical consistency.

------------------------------------------------------------------------

## ⚙️ Technologies Used

-   JavaScript (ES6)
-   HTML5 Canvas API
-   Vector-based force calculations
-   Delta-time (dt) integration

------------------------------------------------------------------------

## 🛠 How to Run

1.  Clone the repository: git clone
    https://github.com/yourusername/your-repo-name.git

2.  Open `index.html` in your browser.

No external dependencies required.

------------------------------------------------------------------------

## 🔬 Future Improvements

-   Implement Velocity Verlet integration for improved orbital
    stability\
-   Add zoom and camera controls\
-   Add dynamic starfield background\
-   Add moons and asteroid belts\
-   Optimize pairwise force calculations

------------------------------------------------------------------------

## 🧑‍💻 Author

Built as a personal project to explore orbital mechanics, physics
simulation, and numerical integration in JavaScript.
