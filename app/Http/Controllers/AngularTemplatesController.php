<?php
/**
 * Created by PhpStorm.
 * User: didenko
 * Date: 10.08.17
 * Time: 22:47
 */

namespace App\Http\Controllers;


use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class AngularTemplatesController extends Controller
{
    
    public function index($template)
    {
        $templatePath = 'frontend.' . $template;

        if (!view()->exists($templatePath)) {
            throw new NotFoundHttpException();
        }

        return view($templatePath);
    }
}