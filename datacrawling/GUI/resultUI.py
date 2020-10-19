# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'resultUI.ui'
#
# Created by: PyQt5 UI code generator 5.9.2
#
# WARNING! All changes made in this file will be lost!

from PyQt5.QtWidgets import *
from PyQt5 import QtWidgets, QtCore
from PyQt5 import QtWebEngineWidgets

class ResultUI(QDialog):
    def __init__(self, parent, resultList):
        super(ResultUI, self).__init__(parent)

        # 리스트, 웹 뷰어 레이아웃 설정
        self.setObjectName("Dialog")
        self.resize(861, 688)
        self.listWidget = QtWidgets.QListWidget(self)
        self.listWidget.setGeometry(QtCore.QRect(10, 10, 231, 571))
        self.listWidget.setObjectName("listWidget")
        self.webEngineView = QtWebEngineWidgets.QWebEngineView(self)
        self.webEngineView.setGeometry(QtCore.QRect(250, 10, 601, 571))
        self.webEngineView.setUrl(QtCore.QUrl("about:blank"))
        self.webEngineView.setObjectName("webEngineView")
        self.pushButton = QtWidgets.QPushButton(self)
        self.pushButton.setGeometry(QtCore.QRect(761, 591, 75, 23))
        self.pushButton.setObjectName("pushButton")
        self.pushButton_2 = QtWidgets.QPushButton(self)
        self.pushButton_2.setGeometry(QtCore.QRect(680, 591, 75, 23))
        self.pushButton_2.setObjectName("pushButton_2")
        self.pushButton_4 = QtWidgets.QPushButton(self)
        self.pushButton_4.setGeometry(QtCore.QRect(761, 620, 75, 23))
        self.pushButton_4.setObjectName("pushButton_4")
        self.pushButton_3 = QtWidgets.QPushButton(self)
        self.pushButton_3.setGeometry(QtCore.QRect(680, 620, 75, 23))
        self.pushButton_3.setObjectName("pushButton_3")

        self.createList(resultList)
        self.retranslateUi()
        QtCore.QMetaObject.connectSlotsByName(self)

        self.show()

    # 버튼 넣음
    def retranslateUi(self):
        _translate = QtCore.QCoreApplication.translate
        self.setWindowTitle(_translate("Dialog", "Dialog"))
        self.pushButton.setText(_translate("Dialog", "이동"))
        self.pushButton_2.setText(_translate("Dialog", "다음"))
        self.pushButton_4.setText(_translate("Dialog", "이전"))
        self.pushButton_3.setText(_translate("Dialog", "취소(삭제)"))

    def createList(self, resultList):
        # 결과 리스트의 값들을 listWidget에 추가
        for item in resultList:
            # widgetItem = QListWidgetItem()
            # widgetItem.setText(item)       # 여러 속성 추가 가능

            self.listWidget.addItem(item)  # Text만 추가할 경우 간단하게
