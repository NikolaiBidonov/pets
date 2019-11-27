<?php 

class Person
{
    public $name,
    $lastname,
    $city;

    private $age,
    $children;

    public function setAge(int $number)
    {
        if ($number > 0 && $number < 110)
        $this->age = $number;
    }
    public function setChildren (int $countChildren)
    {
        if ($countChildren > 0 && $countChildren < 30)
        $this->children = $countChildren;
    }

    public function getAge()
    {
        return $this->age;
    }

    public function getChildren()
    {
        return $this->children;
    }
}

$person = new Person;
$person->name = 'Иван';
$person->lastname = 'Петров';
$person->city = 'г. Москва';
$person->setAge(32);
$person->setChildren(2);

echo  '<pre>';
var_dump($person);
echo  '</pre>';
$person->setAge(33);
$person->city = 'Санкт-Петербург';

echo  '<pre>';
var_dump($person);
echo  '</pre>';

class User extends Person
{
    private $email,
    $phone;

    public function setEmail (string $mail)
    {
        $this->email = $mail;
    }

    public function setPhone (int $phoneNumber)
    {
        $this->phone = $phoneNumber;
    }
}

$user = new User;
$user->name = 'Петр';
$user->lastname = 'Петров';
$user->city = 'Казань';
$user->setAge(20);
$user->setEmail('user@gmail.com');
$user->setPhone(8911111111);

echo '<pre>';
var_dump($user);
echo '</pre>';

?>