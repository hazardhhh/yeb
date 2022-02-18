<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="部门管理" name="first">部门管理</el-tab-pane>
      <el-tab-pane label="职位管理" name="second">职位管理</el-tab-pane>
      <el-tab-pane label="职称管理" name="third">职称管理</el-tab-pane>
      <el-tab-pane label="奖惩规则" name="fourth">奖惩规则</el-tab-pane>
      <el-tab-pane label="权限组" name="five">权限组</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import DepMana from '../../components/sys/basic/DepMana';
import EcMana from '../../components/sys/basic/EcMana';
import JoblevelMana from '../../components/sys/basic/JoblevelMana';
import PermissMana from '../../components/sys/basic/PermissMana';
import PosMana from '../../components/sys/basic/PosMana';

export default {
  name: "SysBasic",
  data() {
    return {
      activeName: 'second'
    }
  }
}
</script>

<style scoped>

</style>