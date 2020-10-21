# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'resultUI.ui'
#
# Created by: PyQt5 UI code generator 5.9.2
#
# WARNING! All changes made in this file will be lost!

from PyQt5.QtCore import QUrl, Qt
from PyQt5 import QtCore, QtGui, QtWidgets
from PyQt5.QtWidgets import QDialog, QTableWidgetItem
from PyQt5 import QtWebEngineWidgets

class resultUI(QDialog, QtWebEngineWidgets.QWebEngineView):
    def __init__(self, parent, data_list):
        super(resultUI, self).__init__(parent)

        self.rowIdx = 1

        self.setObjectName("Dialog")
        self.resize(1344, 822)
        self.gridLayout_3 = QtWidgets.QGridLayout(self)
        self.gridLayout_3.setObjectName("gridLayout_3")
        self.gridLayout = QtWidgets.QGridLayout()
        self.gridLayout.setObjectName("gridLayout")
        self.gridLayout_2 = QtWidgets.QGridLayout()
        self.gridLayout_2.setObjectName("gridLayout_2")
        self.deleteBt = QtWidgets.QPushButton(self)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Fixed, QtWidgets.QSizePolicy.Fixed)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.deleteBt.sizePolicy().hasHeightForWidth())
        self.deleteBt.setSizePolicy(sizePolicy)
        self.deleteBt.setObjectName("deleteBt")
        self.gridLayout_2.addWidget(self.deleteBt, 0, 1, 1, 1)
        self.prevBt = QtWidgets.QPushButton(self)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Fixed, QtWidgets.QSizePolicy.Fixed)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.prevBt.sizePolicy().hasHeightForWidth())
        self.prevBt.setSizePolicy(sizePolicy)
        self.prevBt.setObjectName("prevBt")
        self.gridLayout_2.addWidget(self.prevBt, 0, 2, 1, 1)
        self.nextBt = QtWidgets.QPushButton(self)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Fixed, QtWidgets.QSizePolicy.Fixed)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.nextBt.sizePolicy().hasHeightForWidth())
        self.nextBt.setSizePolicy(sizePolicy)
        self.nextBt.setObjectName("nextBt")
        self.gridLayout_2.addWidget(self.nextBt, 0, 3, 1, 1)
        self.saveBt = QtWidgets.QPushButton(self)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Fixed, QtWidgets.QSizePolicy.Fixed)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.saveBt.sizePolicy().hasHeightForWidth())
        self.saveBt.setSizePolicy(sizePolicy)
        self.saveBt.setObjectName("saveBt")
        self.gridLayout_2.addWidget(self.saveBt, 0, 0, 1, 1)
        self.gridLayout.addLayout(self.gridLayout_2, 1, 1, 1, 1)
        self.webEngineView = QtWebEngineWidgets.QWebEngineView(self)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.MinimumExpanding, QtWidgets.QSizePolicy.Preferred)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(self.webEngineView.sizePolicy().hasHeightForWidth())
        self.webEngineView.setSizePolicy(sizePolicy)
        self.webEngineView.setUrl(QtCore.QUrl("about:blank"))
        self.webEngineView.setObjectName("webEngineView")
        self.gridLayout.addWidget(self.webEngineView, 0, 1, 1, 1)
        self.tableWidget = QtWidgets.QTableWidget(self)
        self.tableWidget.setObjectName("tableWidget")
        self.tableWidget.setColumnCount(2)
        self.tableWidget.horizontalHeader().setDefaultSectionSize(50)
        self.tableWidget.horizontalHeader().setStretchLastSection(True)
        self.tableWidget.setEditTriggers(QtWidgets.QAbstractItemView.NoEditTriggers)
        self.gridLayout.addWidget(self.tableWidget, 0, 0, 1, 1)
        self.gridLayout_3.addLayout(self.gridLayout, 0, 0, 1, 1)

        self.tableWidget.itemDoubleClicked.connect(self.urlEvent)
        self.createList(data_list)


        QtWidgets.QShortcut(QtGui.QKeySequence("Escape"), self, activated=self.on_Escape)

        self.retranslateUi()
        QtCore.QMetaObject.connectSlotsByName(self)

        self.show()

    def retranslateUi(self):
        _translate = QtCore.QCoreApplication.translate
        self.setWindowTitle(_translate("Dialog", "Dialog"))
        self.saveBt.setText(_translate("Dialog", "저장(미완)"))
        self.deleteBt.setText(_translate("Dialog", "삭제(미완)"))
        self.prevBt.setText(_translate("Dialog", "이전"))
        self.nextBt.setText(_translate("Dialog", "다음"))

        #self.pushButton.clicked.connect(self.urlEvent)
        self.nextBt.clicked.connect(self.nextEvent)
        self.prevBt.clicked.connect(self.prevEvent)

    def urlEvent(self):

        self.rowIdx = self.tableWidget.currentRow()

        url = self.tableWidget.item(self.rowIdx, 0).text()

        self.goUrl(url)

    def nextEvent(self):
        if self.rowIdx < self.tableWidget.rowCount() - 1:
            self.rowIdx += 1
        url = self.tableWidget.item(self.rowIdx, 0).text()

        self.goUrl(url)

    def prevEvent(self):
        if self.rowIdx > 1:
            self.rowIdx -= 1
        url = self.tableWidget.item(self.rowIdx, 0).text()

        self.goUrl(url)

    def createList(self, resultList):
        # 결과 리스트의 값들을 listWidget에 추가

        self.tableWidget.setRowCount(len(resultList))
        idx = 0

        for link, title in resultList:
            #widgetItem = QTableWidgetItem()
            #widgetItem.setText(link)       # 여러 속성 추가 가능

            self.tableWidget.setItem(idx, 0, QTableWidgetItem(link))  # Text만 추가할 경우 간단하게
            self.tableWidget.setItem(idx, 1, QTableWidgetItem(title))
            idx += 1

    def goUrl(self, url):
        self.webEngineView.load(QUrl(url))

    @QtCore.pyqtSlot()
    def on_Escape(self):
        self.close()