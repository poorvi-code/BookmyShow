import React from "react";
import { Table, Button } from "react-bootstrap";

const Movies = () => {
  const movies = [
    { name: "Chaava", genre: "Action", release: "2025-03-03", rating: 4.5, price: "$10" },
    { name: "Sikandar", genre: "Romantic", release: "2025-04-06", rating: 4.0, price: "$8" },
    { name: "Max", genre: "Action-Thriller", release: "2024-03-10", rating: 4.5, price: "$10" },
    { name: "Middle Class Family", genre: "Comedy", release: "2025-01-31", rating: 4.5, price: "$10" },
  ];

  return (
    <div className="container mt-4">
      <h2>Now Showing</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Ratings</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.release}</td>
              <td>{movie.rating}</td>
              <td>{movie.price}</td>
              <td>
                <Button variant="primary">Book Now</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Movies;
