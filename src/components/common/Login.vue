<template>
  <div>
    <canvas id="c_n18"
            width="1179"
            height="949"
            style="position: fixed; top: 0px; left: 0px; z-index: -1;">
    </canvas>
    <div class="login-wrap" @keyup.enter="submitForm('ruleForm')">
      <div class="ms-login">
        <div class="ms-title">VPC</div>
        <div class="introduce">Vue Permission Control</div>
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="0px">
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="password" v-model="ruleForm.password"
                      @keyup.enter.native="submitForm('ruleForm')"></el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary"
                       @click.native="submitForm('ruleForm')"
                       :loading="loading">
              登录
            </el-button>
          </div>
          <el-dropdown class="tips" @command="handleCommand">
              <span class="el-dropdown-link">
               Tips : 账号轻戳这里。
              </span>
            <el-dropdown-menu slot="dropdown">
              <template v-for="(item,index) in account">
                <el-dropdown-item
                  :command="item.command"
                  :key="index">{{item.title}}
                </el-dropdown-item>
              </template>
            </el-dropdown-menu>
          </el-dropdown>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  import Dave from '../../dave';
  import request from '@/api/request';
  import api from '@/api/common';

  const model = {
    username: '',
    password: '1234',
  };
  export default {
    data() {
      return {
        loading: false,
        ruleForm: {...model},
        rules: {
          username: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
          password: [{required: true, message: '密码不能为空', trigger: 'blur'}],
        },
        account: [
          {command: 'dave', title: '最高权限'},
          {command: 'admin', title: '一级管理员'},
          {command: 'staff', title: '二级管理员'},
          {command: 'anyone', title: '一般用户'},
        ],
      };
    },
    created() {
      Dave();
    },
    mounted() {
      // 直接子组件直接调用 父组件定义的方法
      this.$emit('clearData');
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = true;
            api.getLogin(this.ruleForm, ({token}) => {
              this.loading = false;
              this.handleToken(token);
            });
          }
        });
      },
      handleToken(token) {
        if (token) {
          request.config.headers['Authorization'] = token;
          localStorage.setItem('token', token);
          this.$emit('login', this.$router.currentRoute.query.from || '/index');
        }
      },
      handleCommand(command) {
        this.ruleForm.username = command;
      },
    },
  };
</script>
<style scoped type="text/scss" lang="scss">
  .login-wrap {
    position: relative;
    width: 100%;
    height: 100vh;
  }

  .title {
    width: 100%;
    text-align: center;
    font-size: 30px;
    color: #fff;
  }

  .ms-title {
    position: absolute;
    top: -80px;
    left: 0;
    @extend .title
  }

  .introduce {
    position: absolute;
    top: -35px;
    left: 0;
    @extend .title;
    font-size: 16px;
  }

  .ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 300px;
    height: 160px;
    margin: -150px 0 0 -190px;
    padding: 40px;
    border-radius: 5px;
    background: #fff;
  }

  .login-btn {
    text-align: center;
  }

  .login-btn button {
    width: 100%;
    height: 36px;
  }

  .tips {
    margin-top: 5px;
    font-size: 14px;
    line-height: 30px;
    color: #999;
    cursor: pointer;
  }
</style>
