<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Jenssegers\Mongodb\Eloquent\Model as MongoModel;

/* class Role extends MongoModel */
class Role extends Model
{
    use HasFactory;

    protected $table = "role";

    protected  $primaryKey = "rol_id";

    protected $fillable = [
      'rol_name'
    ];

    public $timestamps = false;
}



