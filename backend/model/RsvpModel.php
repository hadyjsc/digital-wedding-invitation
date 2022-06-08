<?php
require_once PROJECT_ROOT_PATH . "/model/Database.php";
 
class RsvpModel extends Database
{
    public function list($limit, $page)
    {
        $offset = $page - 1;
        return $this->select("SELECT * FROM rsvps ORDER BY date DESC LIMIT :limit OFFSET :offset ",  ['limit' => $limit, 'offset' => $offset] );
    }

    public function create($data)
    {
        return $this->insert("INSERT INTO rsvps SET id=:id, name=:name, date=:date, status=:status, text=:text, session_id=:session_id, user_id=:user_id, random_profile=:random_profile", $data);
    }
}