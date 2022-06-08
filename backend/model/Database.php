<?php
class Database
{
    protected $connection = null;
 
    public function __construct()
    {
        try {
            $this->connection = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_DATABASE_NAME, DB_USERNAME, DB_PASSWORD);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            throw new Exception($e->getMessage());   
        }           
    }
 
    public function select($query = "" , $params = [])
    {
        try {
            $stmt = $this->executeStatement($query);
            if ($params ){
                $stmt->bindValue(':limit', $params['limit'], PDO::PARAM_INT);
                $stmt->bindValue(':offset', $params['offset'], PDO::PARAM_INT);
            }
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);  
            return $result;
        } catch(Exception $e) {
            throw New Exception( $e->getMessage() );
        }
        return false;
    }

    public function insert($query, $params = [])
    {
        try {
            $stmt = $this->executeStatement( $query);
            if($params) {
                $id = $this->generateUUID();
                $date = date('Y-m-d H:i:s');
                $name = htmlspecialchars(strip_tags($params['name']));
                $status = htmlspecialchars(strip_tags($params['status']));
                $text = htmlspecialchars(strip_tags($params['text']));
                $session_id = htmlspecialchars(strip_tags($params['session_id']));
                $user_id = htmlspecialchars(strip_tags($params['user_id']));
                $random_profile = htmlspecialchars(strip_tags($params['random_profile']));

                $stmt->bindParam(':id', $id);
                $stmt->bindParam(':name', $name);
                $stmt->bindParam(':date', $date);
                $stmt->bindParam(':status', $status);
                $stmt->bindParam(':text', $text);
                $stmt->bindParam(':session_id', $session_id);
                $stmt->bindParam(':user_id', $user_id);
                $stmt->bindParam(':random_profile', $random_profile);
            }
            $stmt->execute();
            return $stmt;
        } catch (Exception $e) {
            throw New Exception( $e->getMessage() );
        }
        return false;
    }
 
    private function executeStatement($query = "")
    {
        try {
            $stmt = $this->connection->prepare( $query );
 
            if($stmt === false) {
                throw New Exception("Unable to do prepared statement: " . $query);
            }
 
            return $stmt;

        } catch(Exception $e) {
            throw New Exception( $e->getMessage() );
        }   
    }

    private function generateUUID() {
        return sprintf( '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            // 32 bits for "time_low"
            mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ),

            // 16 bits for "time_mid"
            mt_rand( 0, 0xffff ),

            // 16 bits for "time_hi_and_version",
            // four most significant bits holds version number 4
            mt_rand( 0, 0x0fff ) | 0x4000,

            // 16 bits, 8 bits for "clk_seq_hi_res",
            // 8 bits for "clk_seq_low",
            // two most significant bits holds zero and one for variant DCE1.1
            mt_rand( 0, 0x3fff ) | 0x8000,

            // 48 bits for "node"
            mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff )
        );
    }
}