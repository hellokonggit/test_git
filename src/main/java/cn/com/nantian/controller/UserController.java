package cn.com.nantian.controller;

import cn.com.nantian.pojo.Item1;
import cn.com.nantian.pojo.NtPersonnel;
import cn.com.nantian.pojo.entity.ResponseData;
import cn.com.nantian.pojo.entity.Result;
import cn.com.nantian.service.DepartmentService;
import cn.com.nantian.service.UserService;
import com.alibaba.fastjson.JSONObject;
import org.springframework.data.annotation.Reference;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

//员工录入信息
@Controller
@RequestMapping("/content")
public class UserController {

    @Resource
    private UserService userService;

    @Resource
    private DepartmentService departmentService;

    /**添加员工基本信息NT_PERSONNEL
     *
     * @param personnel
     * @return
     */
    @RequestMapping("/adduser")
    @ResponseBody
    public ResponseData addUser(@RequestBody NtPersonnel personnel){

        try {
            int d= userService.addUser(personnel);
            if (d == 5) {
                return ResponseData.operationFailure().putDataValue("提示","该员工已添加");
            }
            return ResponseData.ok().putDataValue("add number",d);
        }catch (NullPointerException e) {
            //系统异常
            return ResponseData.serverInternalError();
        }catch (IllegalArgumentException e) {
            //没有权限
            return ResponseData.unauthorized();
        } catch (Exception e) {
            //被禁止
            return ResponseData.forbidden().putDataValue("ddd",e.toString());
        }
    }

    /**
     * 根据部门编号查询部门名称
     * @param deptId
     * @return
     */
    @RequestMapping("/selectdepart")
    @ResponseBody
    public ResponseData selectDepart( int deptId){
        try {
            String  d= departmentService.selectDepart(deptId);
            return ResponseData.ok().putDataValue("select name ",d);

        }catch (NullPointerException e) {
            //系统异常
            return ResponseData.serverInternalError();
        }catch (IllegalArgumentException e) {
            //没有权限
            return ResponseData.unauthorized();
        } catch (Exception e) {
            //被禁止
            return ResponseData.forbidden();
        }


    }

    /**
     * 根据部门deptId和员工name查询员工信息
     * @param item1
     * @return
     */
    @RequestMapping(value = "/findbyidandname")
    @ResponseBody
    public ResponseData selectDepart (@RequestBody Item1 item1){
        List<NtPersonnel> personnelList =null;
        try {
            personnelList = userService.findPersonnelBydeptIdAndName(item1.getDeptId(),item1.getName());
            return ResponseData.ok().putDataValue("select list ",personnelList);
        }catch (NullPointerException e) {
            //系统异常
            return ResponseData.serverInternalError();
        }catch (IllegalArgumentException e) {
            //没有权限
            return ResponseData.unauthorized();
        } catch (Exception e) {
            //被禁止
            return ResponseData.forbidden();
        }

    }

    /**添加员工基本信息NT_PERSONNEL
     *
     * @param idNo
     * @return
     */
    @RequestMapping("/selectbyidno")
    @ResponseBody
    public ResponseData selectByidno( String idNo){
        try {
            NtPersonnel d= userService.findPersonnlByIdno(idNo);

            return ResponseData.ok().putDataValue("add number",d);
        }catch (NullPointerException e) {
            //系统异常
            return ResponseData.serverInternalError();
        }catch (IllegalArgumentException e) {
            //没有权限
            return ResponseData.unauthorized();
        } catch (Exception e) {
            //被禁止
            return ResponseData.forbidden();
        }
    }

}


