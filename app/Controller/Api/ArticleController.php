<?php
class ArticleController extends BaseController
{
    /**
     * "/article/list" Endpoint - Get list of articles
     */
    public function listAction()
    {
        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $arrQueryStringParams = $this->getQueryStringParams();
 
        if (strtoupper($requestMethod) == 'GET') {
            try {
                $articleModel = new ArticleModel();
 
                $intLimit = 10;
                if (isset($arrQueryStringParams['limit']) && $arrQueryStringParams['limit']) {
                    $intLimit = $arrQueryStringParams['limit'];
                }
 
                $arrArticles = $articleModel->getArticles($intLimit);
                $responseData = json_encode($arrArticles);
            } catch (Error $e) {
                $strErrorDesc = $e->getMessage().'Something went wrong! Please contact support.';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $strErrorDesc = 'Method not supported';
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }
 
        // send output
        if (!$strErrorDesc) {
            $this->sendOutput(
                $responseData,
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput(json_encode(array('error' => $strErrorDesc)), 
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }

    public function postAction()
    {
        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $token = str_replace('Bearer',"", getallheaders()['authorization']);
 
        if (strtoupper($requestMethod) == 'POST') {
            try {
                $userModel = new UserModel();
                $response = $userModel->getUser($token);
                $author = $response[0]['username'];
                $articleModel = new ArticleModel();
                $body = file_get_contents('php://input');
                $body = json_decode($body, true);
                $response = $articleModel->postArticle($body, $author);
                $responseData = json_encode(array('response' => $response, 'message'=> "Successfully posted review!"));
            } catch (Error $e) {
                $strErrorDesc = $e->getMessage();
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } else {
            $strErrorDesc = 'Method not supported';
            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';
        }

          // send output
          if (!$strErrorDesc) {
            $this->sendOutput(
                $responseData,
                array('Content-Type: application/json', 'HTTP/1.1 200 OK')
            );
        } else {
            $this->sendOutput(json_encode(array('error' => $strErrorDesc)), 
                array('Content-Type: application/json', $strErrorHeader)
            );
        }
    }

}