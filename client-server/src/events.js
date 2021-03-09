const express = require('express');

function createRouter(db) {
  const router = express.Router();
//   const owner = '';

  // the routes are defined here


  router.post('/cliente', (req, res, next) => {
    db.query(
      'INSERT INTO tb_clients (cli_id, cli_name, cli_email, cli_login, cli_password) VALUES (?,?,?,?,?)',
      [req.body.id, req.body.name, req.body.email, req.body.login, req.body.password],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.get('/cliente', function (req, res, next) {
    db.query(
      'SELECT * FROM tb_clients',
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });



  router.get('/cliente/:id', function (req, res, next) {
    db.query(
      'SELECT FROM tb_clients WHERE cli_id=?',
      [req.params.id],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });


  router.put('/cliente/:id', function (req, res, next) {
    db.query(
      'UPDATE tb_clients SET  cli_name=?, cli_email=?, cli_login=?, cli_password=? WHERE cli_id=?',
      [req.body.name, req.body.email, req.body.login, req.body.password],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });


  router.delete('/cliente/:id', function (req, res, next) {
    db.query(
      'DELETE FROM tb_clients WHERE cli_id=?',
      [req.params.id],
      (error) => {
        if (error) {
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;

