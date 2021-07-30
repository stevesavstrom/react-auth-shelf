const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const rejectUnauthenticated =
  require("../modules/authentication-middleware").rejectUnauthenticated;
/**
 * Get all of the items on the shelf
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  const query = `SELECT * FROM item WHERE user_id=$1;`;
  pool
    .query(query, [req.user.id])
    .then((results) => {
      console.log(results.rows);
      res.send(results.rows);
    })
    .catch((error) => {
      console.log("error GETting items", error);
    });
  //res.sendStatus(200); // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  console.log("req.body:", req.body);
  const addItemQuery = `INSERT INTO item (description, image_url, user_id)
   VALUES ($1, $2, $3);`;
  pool
    .query(addItemQuery, [
      req.body.description,
      req.body.image_url,
      req.user.id,
    ])
    .then((result) => {
      console.log("New Item on shelf is", result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`ERROR Adding item: ${error}`);
      res.sendStatus(500);
    });

  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete("/:id", rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  console.log(`What is being DELETED:`, req.params.id);
  const deleteItemQuery = `DELETE from item WHERE id=$1;`;
  pool
    .query(deleteItemQuery, [req.params.id])
    .then((result) => {
      console.log(`Successfully DELETED from database`, result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Did not DELETE from database`, error);
      res.sendStatus(500);
    });
});

/**
 * Update an item if it's something the logged in user added
 */
router.put("/:id", rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  console.log(`What is being UPDATED:`, req.params.id);
  const updateQuery = `UPDATE item SET "description"=$1, "image_url"=$2 WHERE "id"=$3`;
  pool
    .query(updateQuery, [
      req.body.description,
      req.body.image_url,
      req.params.id,
    ])
    .then((result) => {
      console.log("successfully updated database", result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("error updating database", error);
      res.sendStatus(500);
    });
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get("/count", (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get("/:id", (req, res) => {
  // endpoint functionality
});

module.exports = router;
