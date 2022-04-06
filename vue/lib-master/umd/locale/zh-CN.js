(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/zh-CN', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.zhCN = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'ȷ��',
        clear: '���'
      },
      datepicker: {
        now: '�˿�',
        today: '����',
        cancel: 'ȡ��',
        clear: '���',
        confirm: 'ȷ��',
        selectDate: 'ѡ������',
        selectTime: 'ѡ��ʱ��',
        startDate: '��ʼ����',
        startTime: '��ʼʱ��',
        endDate: '��������',
        endTime: '����ʱ��',
        prevYear: 'ǰһ��',
        nextYear: '��һ��',
        prevMonth: '�ϸ���',
        nextMonth: '�¸���',
        year: '��',
        month1: '1 ��',
        month2: '2 ��',
        month3: '3 ��',
        month4: '4 ��',
        month5: '5 ��',
        month6: '6 ��',
        month7: '7 ��',
        month8: '8 ��',
        month9: '9 ��',
        month10: '10 ��',
        month11: '11 ��',
        month12: '12 ��',
        // week: '�ܴ�',
        weeks: {
          sun: '��',
          mon: 'һ',
          tue: '��',
          wed: '��',
          thu: '��',
          fri: '��',
          sat: '��'
        },
        months: {
          jan: 'һ��',
          feb: '����',
          mar: '����',
          apr: '����',
          may: '����',
          jun: '����',
          jul: '����',
          aug: '����',
          sep: '����',
          oct: 'ʮ��',
          nov: 'ʮһ��',
          dec: 'ʮ����'
        }
      },
      select: {
        loading: '������',
        noMatch: '��ƥ������',
        noData: '������',
        placeholder: '��ѡ��'
      },
      cascader: {
        noMatch: '��ƥ������',
        loading: '������',
        placeholder: '��ѡ��',
        noData: '��������'
      },
      pagination: {
        goto: 'ǰ��',
        pagesize: '��/ҳ',
        total: '�� {total} ��',
        pageClassifier: 'ҳ'
      },
      messagebox: {
        title: '��ʾ',
        confirm: 'ȷ��',
        cancel: 'ȡ��',
        error: '��������ݲ��Ϸ�!'
      },
      upload: {
        deleteTip: '�� delete ����ɾ��',
        delete: 'ɾ��',
        preview: '�鿴ͼƬ',
        continue: '�����ϴ�'
      },
      table: {
        emptyText: '��������',
        confirmFilter: 'ɸѡ',
        resetFilter: '����',
        clearFilter: 'ȫ��',
        sumText: '�ϼ�'
      },
      tree: {
        emptyText: '��������'
      },
      transfer: {
        noMatch: '��ƥ������',
        noData: '������',
        titles: ['�б� 1', '�б� 2'],
        filterPlaceholder: '��������������',
        noCheckedFormat: '�� {total} ��',
        hasCheckedFormat: '��ѡ {checked}/{total} ��'
      },
      image: {
        error: '����ʧ��'
      },
      pageHeader: {
        title: '����'
      },
      popconfirm: {
        confirmButtonText: 'ȷ��',
        cancelButtonText: 'ȡ��'
      }
    }
  };
  module.exports = exports['default'];
});