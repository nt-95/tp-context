<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
 
class ArticleModel extends Database
{
    public function getArticles($movie_id)
    {
        $db = new Database();
        $query = "SELECT * from `articles` WHERE `movie_id`=? ";
        try {
            $stmt = $db->connection->prepare($query);
            $stmt->bind_param("i", $movie_id);
            $stmt->execute();
            $res = $stmt->get_result();
            $data = $res->fetch_all(MYSQLI_ASSOC);
            return $data;
        } catch(Exception $e) {
        throw New Exception( $e->getMessage() );
    } 
        // return $this->select("SELECT * FROM `articles` WHERE movie_id=? ORDER BY id ASC LIMIT 20", ["i", $movie_id]);
    }

    public function postArticle($body, $author)
    {
        $id = NULL;
        $title = $body['title'];
        $content = $body['content'];
        $date = new DateTime();
        $date = $date->format('Y-m-d H:i:s');
        $movie_id = $body['movie_id'];

        $db = new Database();
        $query = "INSERT INTO articles VALUES (?, ?, ?, ?, ?, ?)";
        try {
            $stmt = $db->connection->prepare( $query );
 
            if($stmt === false) {
                throw New Exception("Unable to do prepared statement: " . $query);
            }
       
            $stmt->bind_param("issssi", $id, $title, $author, $content, $date, $movie_id);
 
            $stmt->execute();
            return $stmt;
        } catch(Exception $e) {
            throw New Exception( $e->getMessage() );
        }     
    }
}