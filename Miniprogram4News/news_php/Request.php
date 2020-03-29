<?php

/**
 * 数据操作类
 */
class Request
{
    //允许的请求方式
    private static $method_type = array('get', 'post', 'put', 'patch', 'delete');
    //测试数据
    
    private static $test_type = array(
        array('category' => 'all', 'name' => '热点'),
        array('category' => '1', 'name' => '社会'),
        array('category' => '2', 'name' => '娱乐'),
        array('category' => '3', 'name' => '科技'),
        array('category' => '4', 'name' => '汽车'),
        array('category' => '5', 'name' => '财经')
    );
    private static $test_list = array(
        array('title' => 'title1', 'has_image' => false, 'comment_count'=> 5, 'publish_time'=>'2020-03-09 9:25'),
        array('title' => 'title2', 'has_image' => false, 'comment_count'=> 5, 'publish_time'=>'2020-03-09 9:25'),
        array('title' => 'title3', 'has_image' => true, 'comment_count'=> 5, 'publish_time'=>'2020-03-09 9:25'),
        array('title' => 'title4', 'has_image' => false, 'comment_count'=> 5, 'publish_time'=>'2020-03-09 9:25')
    );

    public static function getRequest()
    {
        //请求方式
        $method = strtolower($_SERVER['REQUEST_METHOD']);
        if (in_array($method, self::$method_type)) {
            //调用请求方式对应的方法
            $data_name = $method . 'Data';
            return self::$data_name($_REQUEST);
        }
        return false;
    }

    //GET 获取信息
    private static function getData($request_data)
    {
        // $class_id = (int)$request_data['class'];
        $view = "";
        if(isset($request_data['view']))
            $view = $request_data['view'];
        
        switch($view){
            //GET /news/type
            case "type":
                return self::$test_type;
            //GET /news/list
            case "list":
                return self::$test_list; 
            case "":
                break;
        }
    }

    //POST /new/：新建一个班
    private static function postData($request_data)
    {
        $view = "";
        if(isset($request_data['view'])
            $view = $request_data['view'];
        
        switch($view){
            //GET /news/type
            case "type":
                return self::$test_type;
            //GET /news/list
            case "list":
                return self::$test_list; 
            case "":
                break;
        }
    }
}