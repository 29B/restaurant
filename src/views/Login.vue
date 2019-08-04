登陆界面
<template>
  <div>
    <div class="pos">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-col :span="24">
            <el-input v-model="ruleForm.username"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-col :span="24">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off" show-password></el-input>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" round @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
// import axios from "../plugins/axios"; //在哪里用就在哪里引入
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          //this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      status: 0,
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          {
            min: 1,
            max: 12,
            message: "长度在 1 到 12 个字符",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(ruleForm) {
      this.$router.push('page');
    }
  }
};
</script>


<style scoped>
.pos {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.pos >>> .el-form-item__label {
  font-size: 20px;
}
input {
  display: block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}

button {
  display: block;
  width: 250px;
}

span {
  cursor: pointer;
}

span:hover {
  color: #41b883;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-form {
  border: #333 2px solid;
  width: 400px;
  border-radius: 4px;
  padding: 40px 40px;
  margin: 0 auto;
}
</style>